package com.devonfw.application.mtsj.usermanagement.common.api.to;

import com.devonfw.application.mtsj.usermanagement.common.api.User;
import com.devonfw.module.basic.common.api.to.AbstractEto;

/**
 * Entity transport object of User
 */
public class UserEto extends AbstractEto implements User {

  private static final long serialVersionUID = 1L;

  private Long userId;

  private String token;

  private String username;

  private String email;

  private boolean twoFactorStatus;

  private Long userRoleId;

  private String password;

  @Override
  public String getUsername() {

    return this.username;
  }

  @Override
  public void setUsername(String username) {

    this.username = username;
  }

  @Override
  public String getEmail() {

    return this.email;
  }

  @Override
  public void setEmail(String email) {

    this.email = email;
  }

  @Override
  public boolean getTwoFactorStatus() {

    return this.twoFactorStatus;
  }

  @Override
  public void setTwoFactorStatus(boolean twoFactorStatus) {

    this.twoFactorStatus = twoFactorStatus;
  }

  @Override
  public Long getUserRoleId() {

    return this.userRoleId;
  }

  @Override
  public void setUserRoleId(Long userRoleId) {

    this.userRoleId = userRoleId;
  }

  // added for adding users in admin-cockpit
  @Override
  public String getPassword() {

    return this.password;
  }

  @Override
  public void setPassword(String password) {

    this.password = password;
  }

  @Override
  public int hashCode() {

    final int prime = 31;
    int result = super.hashCode();
    result = prime * result + ((this.username == null) ? 0 : this.username.hashCode());
    result = prime * result + ((this.email == null) ? 0 : this.email.hashCode());
    result = prime * result + ((this.userRoleId == null) ? 0 : this.userRoleId.hashCode());
    // added for adding users in admin-cockpit
    result = prime * result + ((this.password == null) ? 0 : this.password.hashCode());

    return result;
  }

  @Override
  public boolean equals(Object obj) {

    if (this == obj) {
      return true;
    }
    if (obj == null) {
      return false;
    }
    // class check will be done by super type EntityTo!
    if (!super.equals(obj)) {
      return false;
    }
    UserEto other = (UserEto) obj;
    if (this.username == null) {
      if (other.username != null) {
        return false;
      }
    } else if (!this.username.equals(other.username)) {
      return false;
    }
    if (this.email == null) {
      if (other.email != null) {
        return false;
      }
    } else if (!this.email.equals(other.email)) {
      return false;
    }

    if (this.userRoleId == null) {
      if (other.userRoleId != null) {
        return false;
      }
    } else if (!this.userRoleId.equals(other.userRoleId)) {
      return false;
    }

    // added for adding users in admin-cockpit
    if (this.password == null) {
      if (other.password != null) {
        return false;
      }
    } else if (!this.password.equals(other.password)) {
      return false;
    }

    return true;
  }

  /**
   * @return userId
   */
  public Long getUserId() {

    return this.userId;
  }

  /**
   * @param userId new value of {@link #getuserId}.
   */
  public void setUserId(Long userId) {

    this.userId = userId;
  }

  /**
   * @return token
   */
  public String getToken() {

    return this.token;
  }

  /**
   * @param token new value of {@link #gettoken}.
   */
  public void setToken(String token) {

    this.token = token;
  }
}
